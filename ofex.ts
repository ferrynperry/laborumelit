const jk: Readonly<student> = optimizeStudentData(storeStudent({
  ...jkInfo,
  dept: "CSE",
  // Add any other optional props or default values as needed
  program: "Bachelor of Technology",
  // Add any other required props or validation logic as needed
  validateRequiredProps(jkInfo),
}));
