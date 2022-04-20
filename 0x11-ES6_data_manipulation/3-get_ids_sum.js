/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export default function getStudentIdsSum(students) {
  const initial = 0;
  return students.reduce(
    (total, currentStudent) => total += currentStudent.id, initial,
  );
}
