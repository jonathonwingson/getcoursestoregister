
// const studentCourses = [
//   { id: 1, grade: "A-", created_at: "2023-07-12 17:36:01.905+00", updated_at: "2023-07-12 17:36:01.905+00", studentId: "816026602", courseCode: "COMP2606" },
//   { id: 2, grade: "A", created_at: "2023-07-12 17:36:02.006+00", updated_at: "2023-07-12 17:36:02.006+00", studentId: "816026602", courseCode: "COMP1601" },
//   { id: 3, grade: "B", created_at: "2023-07-12 17:36:02.085+00", updated_at: "2023-07-12 17:36:02.085+00", studentId: "816026602", courseCode: "FOUN1105" }
// ];

// const programmeCourses = [
//   { id: 33, created_at: "2023-07-11 14:19:30.016+00", updated_at: "2023-07-11 14:19:30.016+00", programmeId: 1, typeId: 2, courseCode: "COMP1601" },
//   { id: 229, created_at: "2023-07-11 14:20:19.02+00", updated_at: "2023-07-11 14:20:19.02+00", programmeId: 1, typeId: 3, courseCode: "FOUN1105" },
//   { id: 236, created_at: "2023-07-11 14:20:20.17+00", updated_at: "2023-07-11 14:20:20.17+00", programmeId: 1, typeId: 1, courseCode: "COMP2606" },
//   { id: 228, created_at: "2023-07-11 14:20:19.02+00", updated_at: "2023-07-11 14:20:19.02+00", programmeId: 1, typeId: 1, courseCode: "INFO3609" }, //not in studentcourses
//   { id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", programmeId: 1, typeId: 1, courseCode: "COMP3610" }, //not in studentcourses
// ];

// const semesterCourses = [
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP3610"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP3610"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP1601"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "FOUN1105"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP2606"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP1602"},
// ]

const programmeId = 1;
const studentCourses = ['COMP2606', 'COMP1601', 'FOUN1105'];
const programmeCourses = ['COMP1601', 'FOUN1105', 'COMP2606', 'INFO3609', 'COMP3610'];
const semesterCourses = ['COMP3610', 'COMP1601', 'FOUN1105', 'COMP2606', 'COMP1602', 'INFO3609'];

const prerequisites = [
  { courseCode: "INFO3610", groupId: 2, programmeId: 1 },
  { courseCode: "INFO3610", groupId: 4, programmeId: 1 },
  { courseCode: "INFO3610", groupId: 2, programmeId: 2 },
  { courseCode: "INFO3610", groupId: 4, programmeId: 2 }
];

const courseGroups = [
  { groupId: 1, courseCode: "COMP2603" },
  { groupId: 2, courseCode: "COMP2606" },
  { groupId: 3, courseCode: "COMP2603" },
  { groupId: 3, courseCode: "COMP2606" },
  { groupId: 4, courseCode: "INFO2600" },
];

const antirequisites = [
  {id: 1, created_at: "2023-07-11 14:19:30.016+00", updated_at: "2023-07-11 14:19:30.016+00", courseCode: "INFO3609", antirequisiteCourseCode: "INFO3610"},
  {id: 2, created_at: "2023-07-11 14:19:30.016+00", updated_at: "2023-07-11 14:19:30.016+00", courseCode: "INFO3610", antirequisiteCourseCode: "INFO3609"},
];

// returns true if all courses in the group is in the student courses
function groupSatisfied(groupId) {

  // checks for multiple courses in a group
  for (let i = 0; i < courseGroups.length; i++) {
    if (courseGroups[i].groupId === groupId) {

      // if the student does not satisfy the course
      if (!studentCourses.includes(courseGroups[i].courseCode)) {

        // since the student must satisfy all the courses in th group return false
        return false;
      }
    }
  }

  // student satisfies all the courses in the group 
  return true;
}

// returns true if atleast one group of courses is in the student courses
function atLeastOneGroupSatisfied(groupIds) {
  for (const groupId of groupIds) {
    if (groupSatisfied(groupId)) {
      return true;
    }
  }
  return false;
}

// checks if the prerequisites a course in a programme is satisfied  
function arePrerequisitesSatisfied(courseCode, programmeId) {

  let groupIds = [];

  for (j = 0; j < prerequisites.length; j++) {
    // if course has prereq for programme
    if (prerequisites[j].courseCode === courseCode && prerequisites[j].programmeId === programmeId) {
      // get all groups of prerequisites 
      groupIds.push(prerequisites[j].groupId); 
    }
  }

  // if there are no groups return true OR if at least one group is satisfied return true
  return groupIds.length === 0 || atLeastOneGroupSatisfied(groupIds);
  
}

// checks if the student did any anti-requisites for the course
function completedAntirequisites(courseCode){
  for( let i=0; i<antirequisites.length; i++){
    if( antirequisites[i].courseCode === courseCode){
      for( let j=0; j<studentCourses.length; j++){
        if(studentCourses[j].courseCode === antirequisites[i].antirequisiteCourseCode){
          return true;
        }
      }
    }
  }
  return false;
}

// returns a list of courses the student can register for in the next semester
function get_courses_to_register(programmeId, studentCourses, programmeCourses, semesterCourses, prerequisites, courseGroups) {

  let registerableCourses = [];

  // for each programme course
  for (i = 0; i < programmeCourses.length; i++) {

    let prereqSatisfied = false;
    let completedAntireq = false;

    // if programmeCourse not completed by the student and is available in the semester
    if (!studentCourses.includes(programmeCourses[i]) && semesterCourses.includes(programmeCourses[i])) {

      // check if the student has satisfied the prereqs
      prereqSatisfied = arePrerequisitesSatisfied(programmeCourses[i].courseCode, programmeId);

      // check if the student has done any anti-requisites
      completedAntireq = completedAntirequisites(programmeCourses[i].courseCode);
    
    }

    // if student satisfies the prereqs and have not done any anti-reqs, course is registerable 
    if( prereqSatisfied === true && completedAntireq === false){
      registerableCourses.push(programmeCourses[i]);
      // console.log("push course: ", programmeCourses[i]);
    }

    
  }

  return registerableCourses;
}


const remainingCourses = get_courses_to_register(programmeId, studentCourses, programmeCourses, semesterCourses, prerequisites, courseGroups);
console.log('Registerable courses:', remainingCourses);
