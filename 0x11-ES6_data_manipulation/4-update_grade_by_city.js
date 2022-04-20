/* eslint-disable no-param-reassign */
import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = getStudentsByLocation(students, city);
  return studentsByCity.map((student) => {
    const newGrade = newGrades.filter((element) => element.studentId === student.id)[0];
    if (!newGrade) {
      student.grade = 'N/A';
    } else if (!newGrade.grade) {
      student.grade = 'N/A';
    } else {
      student.grade = newGrade.grade;
    }
    return student;
  });
}
