
const studentCourses = [ 'COMP2606', 'COMP1601', 'FOUN1105' ];
const programmeCourses = [ 'COMP1601', 'FOUN1105', 'COMP2606', 'COMP3609', 'COMP3610'];
const semesterCourses = [ 'COMP3610', 'COMP1601', 'FOUN1105', 'COMP2606', 'COMP1602' ];

// const studentCourses = [
//   { id: 1, grade: "A-", created_at: "2023-07-12 17:36:01.905+00", updated_at: "2023-07-12 17:36:01.905+00", studentId: "816026602", courseCode: "COMP2606" },
//   { id: 2, grade: "A", created_at: "2023-07-12 17:36:02.006+00", updated_at: "2023-07-12 17:36:02.006+00", studentId: "816026602", courseCode: "COMP1601" },
//   { id: 3, grade: "B", created_at: "2023-07-12 17:36:02.085+00", updated_at: "2023-07-12 17:36:02.085+00", studentId: "816026602", courseCode: "FOUN1105" }
// ];

// const programmeCourses = [
//   { id: 33, created_at: "2023-07-11 14:19:30.016+00", updated_at: "2023-07-11 14:19:30.016+00", programmeId: 1, typeId: 2, courseCode: "COMP1601" },
//   { id: 229, created_at: "2023-07-11 14:20:19.02+00", updated_at: "2023-07-11 14:20:19.02+00", programmeId: 1, typeId: 3, courseCode: "FOUN1105" },
//   { id: 236, created_at: "2023-07-11 14:20:20.17+00", updated_at: "2023-07-11 14:20:20.17+00", programmeId: 1, typeId: 1, courseCode: "COMP2606" },
//   { id: 228, created_at: "2023-07-11 14:20:19.02+00", updated_at: "2023-07-11 14:20:19.02+00", programmeId: 1, typeId: 1, courseCode: "COMP3609" }, //not in studentcourses
//   { id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", programmeId: 1, typeId: 1, courseCode: "COMP3610" }, //not in studentcourses
// ];

// const semesterCourses = [
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP3610"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP1601"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "FOUN1105"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP2606"},
//   {id: 1, created_at: "2023-07-11 14:19:22.847+00", updated_at: "2023-07-11 14:19:22.847+00", semesterId: 1, courseCode: "COMP1602"},
// ]

const prerequisites = [ 
  {courseCode: "INFO3610", groupId: 2, programmeId: 1}, 
  {courseCode: "INFO3610", groupId: 4, programmeId: 1},
  {courseCode: "INFO3610", groupId: 2, programmeId: 2},
  {courseCode: "INFO3610", groupId: 4, programmeId: 2}
];

const courseGroups = [
  {groupId: 1, courseCode: "COMP2603"},
  {groupId: 2, courseCode: "COMP2606"},
  {groupId: 3, courseCode: "COMP2603"},
  {groupId: 3, courseCode: "COMP2606"},
  {groupId: 4, courseCode: "INFO2600"},
]


function get_courses_to_register(programmeId, studentCourses, programmeCourses, semesterCourses, prerequisites, courseGroups){


  // studentCourses.includes(programmeCourse) 

    // for each programme course
    for ( i=0; i<programmeCourses.length; i++){

      // get the programmeCourse course code
      // let programmeCourse = programmeCourses[i];

      // if programmeCourse not completed by the student and is available in the semester
        if( !studentCourses.includes( programmeCourses[i] ) && semesterCourses.includes( programmeCourses[i] ) ){
          
          for( j=0; j<prerequisites.length; j++){
            if( prerequisites[j].courseCode == programmeCourses[i] && prerequisites[j].programmeId == programmeId){
              groupIds = prerequisites[j].groupId
            }
          }
          



          
        }
    }// for i
//          // get prereq for progcourse in programme by programmeId
//            prereq = Prerequisite.findAll (courseCode: programmeCourse[i].courseCode , programmeId)

//          // if  prereqs exist for the programme course (not done by the student)
//            // NOTE: ?
//            //   if there is more than 1 prereq it is or, 
//            //   if one it is all in the group(and), 
//            //   if empty no prereqs for the course

//            //chatcode- figure out what this is doing
//             if (prereq.length === 0) {
//                // No prerequisites required, so add the course directly
//                registerableCourses.add(courseCode);
//            } else {
//                // Check if the student has fulfilled at least one group's prerequisites
//                let groupIds = new Set(prereq.map(item => item.groupId));
//                let fulfilledAtLeastOneGroup = false;

//                for (let groupId of groupIds) {
//                    let courseGroup = CourseGroup.findAll({ id: groupId });

//                    let prereqCourseCodes = new Set(courseGroup.map(item => item.prerequisiteCourseCode));
//                    if ([...prereqCourseCodes].every(course => studentCourses.includes(course))) {
//                        fulfilledAtLeastOneGroup = true;
//                        break;
//                    }
//                }

//                if (fulfilledAtLeastOneGroup) {
//                    registerableCourses.add(courseCode);
//                }
//            }

          

// //	      if( prereq ){
// //               // for each prereq
// //               for( j=0; j<prereq.length){
// //                  // help=-=-=-=-=-=-=-=-=-
// //                  // get course in the group associated with the groupId
// //		      courseGroup = CourseGroup.findAll (id: prereq[j].groupId)
// //		      if (courseGroup.courseCode in studentCourses){
// //                     registerableCourses.add(groupCourse);
// //                  }else{
// //                  }
// //               }
// //  		   // for each group
// //		   for( k=0; K< group.length){
// //		      //get the courses for each group
// //			group.courseCode
// //               }// for each group
// //	 	
// //             }// if

// //          }// if prereq

//         }// if

//     }// for programme course length	

   
   
//    Return list of remaining courses

}//main



const remainingCourses = get_courses_to_register(studentCourses, programmeCourses, semesterCourses);
console.log('Remaining courses:', remainingCourses);
