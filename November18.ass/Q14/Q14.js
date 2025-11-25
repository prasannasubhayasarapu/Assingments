function employeePerformanceEvaluation(employees) {
  return employees
    .filter(emp => emp.tasksCompleted > 5)
    .map(emp => {
      let performanceLevel;
      if (emp.rating > 4.5) {
        performanceLevel = "Excellent";
      } else if (emp.rating >= 3 && emp.rating <= 4.5) {
        performanceLevel = "Good";
      } else {
        performanceLevel = "Needs Improvement";
      }
      
      return { name: emp.name, performance: performanceLevel };
    })
    .filter(emp => emp.performance !== "Needs Improvement") // Add this line
    .sort((a, b) => {
      const order = { "Excellent": 0, "Good": 1 };
      return order[a.performance] - order[b.performance];
    });
}
const employees= [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

console.log(employeePerformanceEvaluation(employees));
