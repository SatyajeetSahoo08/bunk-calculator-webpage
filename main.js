const form = document.getElementById("attendance-form");
const inputAttended = document.getElementById("attended");
const inputTotal = document.getElementById("total");
const inputRequiredPercent = document.getElementById("required-percent");
const displayAttendance = document.getElementById("attendance-percent");
const displayAttended = document.getElementById("classes-attended");
const displayTotal = document.getElementById("classes-held");

function calculateSkippableClasses(attended, total, requiredPercent) {
  if (total <= 0 || attended < 0 || attended > total || requiredPercent < 0 || requiredPercent > 100) {
    return 0;
  }

  const attendancePercent = (attended / total) * 100;

  if (attendancePercent < requiredPercent) {
    return 0;
  }

  const maxSkippable = Math.floor(
    (attended - (requiredPercent / 100) * total) / (requiredPercent / 100)
  );

  return Math.max(0, maxSkippable);
}

function updateAttendanceMessage(attended, total, requiredPercent) {
  const attendancePercent = total > 0 ? (attended / total) * 100 : 0;
  let neededClasses = 0;
  if (attendancePercent < requiredPercent) {
    neededClasses = Math.ceil(
      ((requiredPercent / 100) * total - attended) / (1 - requiredPercent / 100)
    );
  }

  const prevMsg = document.getElementById("needed-classes-msg");
  if (prevMsg) prevMsg.remove();

  const msg = document.createElement("div");
  msg.id = "needed-classes-msg";
  msg.style.marginTop = "15px";
  msg.style.fontWeight = "700";
  msg.style.fontSize = "1rem";

  if (attendancePercent >= requiredPercent) {
    const skippableClasses = calculateSkippableClasses(attended, total, requiredPercent);
    msg.innerHTML = `🎉 Congratulations! Your attendance is sufficient, and you can skip <span style="color:#007bff; font-weight: 900;">${skippableClasses}</span> more classes.`;
    msg.style.color = "#28a745";
  } else {
    msg.innerHTML = `⚠️ Your attendance is short! You need to attend <span style="color:#fb2600ff; font-weight: 900;">${neededClasses}</span> more classes.`;
    msg.style.color = "#FF6C51";
  }

  form.appendChild(msg);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const attended = parseInt(inputAttended.value);
  const total = parseInt(inputTotal.value);
  const requiredPercent = parseInt(inputRequiredPercent.value);

  if (isNaN(attended) || isNaN(total) || isNaN(requiredPercent)) {
    alert("Please enter valid numbers in all fields");
    return;
  }

  if (attended < 0 || total <= 0 || attended > total) {
    alert("Invalid values: Attended classes must be >=0 and <= total classes");
    return;
  }
  if (requiredPercent < 0 || requiredPercent > 100) {
    alert("Required attendance must be between 0 and 100");
    return;
  }

  const attendancePercent = (attended / total) * 100;

  displayAttendance.textContent = attendancePercent.toFixed(2) + "%";
  displayAttended.textContent = attended;
  displayTotal.textContent = total;

  updateAttendanceMessage(attended, total, requiredPercent);
});

