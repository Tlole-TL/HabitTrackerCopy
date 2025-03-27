document.addEventListener("DOMContentLoaded", function () {
  // Get refs to the form and input elements
  const goalForm = document.getElementById("goal-form");
  const goalInput = document.getElementById("goal-input");
  const goalCategory = document.getElementById("goal-category");

  // Goal lists
  const dailyGoals = document.querySelector(".goal-category h2 + ul"); // Daily goals 
  const weeklyGoals = document.querySelectorAll(".goal-category h2 + ul")[1]; // Weekly goals 
  const monthlyGoals = document.querySelectorAll(".goal-category h2 + ul")[2]; // Monthly goals 
  const yearlyGoals = document.querySelectorAll(".goal-category h2 + ul")[3]; // Yearly goals 

  // Function to create a new goal
  function createGoalItem(goalText) {
      const goalItem = document.createElement("li");
      goalItem.textContent = goalText;
      return goalItem;
  }

  // submission
  goalForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const goalText = goalInput.value.trim();
      const category = goalCategory.value;

      if (goalText !== "") {
          const newGoalItem = createGoalItem(goalText);

          // Add the goals to the categorys 
          switch (category) {
              case "daily":
                  dailyGoals.appendChild(newGoalItem);
                  break;
              case "weekly":
                  weeklyGoals.appendChild(newGoalItem);
                  break;
              case "monthly":
                  monthlyGoals.appendChild(newGoalItem);
                  break;
              case "yearly":
                  yearlyGoals.appendChild(newGoalItem);
                  break;
          }

          goalInput.value = ""; // Clear the input field
      }
  });
});
