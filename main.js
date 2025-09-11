const form = document.getElementById("attendance-form");
const inputAttended = document.getElementById("attended");
const inputTotal = document.getElementById("total");
const inputRequiredPercent = document.getElementById("required-percent");
const displayAttendance = document.getElementById("attendance-percent");
const displayAttended = document.getElementById("classes-attended");
const displayTotal = document.getElementById("classes-held");

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

  let neededClasses = 0;
  let skippableClasses = 0;

  if (attendancePercent < requiredPercent) {
    neededClasses = Math.ceil(
      ((requiredPercent / 100) * total - attended) / (1 - requiredPercent / 100)
    );
  } else {
    skippableClasses = Math.floor(
      (attended - (requiredPercent / 100) * total) / (requiredPercent / 100)
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
    msg.innerHTML = `🎉 Congratulations! Your attendance is sufficient and you can skip <span style="color:#28a745;">${skippableClasses}</span> classes.`;
    msg.style.color = "#28a745";
  } else {
    msg.innerHTML = `⚠️ Your attendance is short! You need to attend <span style="color:#FF6C51;">${neededClasses}</span> more classes.`;
    msg.style.color = "#FF6C51";
  }

  form.appendChild(msg);
});
