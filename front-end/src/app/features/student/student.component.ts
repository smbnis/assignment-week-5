import { Component, OnInit } from '@angular/core';
import { Student } from '../../shared/interfaces/student';
import { Class } from '../../shared/interfaces/class';
import { StudentService } from '../../shared/services/student/student.service';
import { ClassService } from '../../shared/services/class/class.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  classes: Class[] = [];

  constructor(private studentService: StudentService, private classService: ClassService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getClasses();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  getClasses(): void {
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

  addStudent(name: string, classId: string): void {
    const newStudent: Student = { name, classId };
    this.studentService.createStudent(newStudent).subscribe(student => {
      this.students.push(student);
    });
  }

  updateStudent(student: Student): void {
    this.studentService.updateStudent(student._id!, student).subscribe(updatedStudent => {
      const index = this.students.findIndex(s => s._id === updatedStudent._id);
      if (index !== -1) {
        this.students[index] = updatedStudent;
      }
    });
  }

  deleteStudent(id: string = ""): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter(student => student._id !== id);
    });
  }

  getClassName(classId: string): string {
    const cls = this.classes.find(c => c._id === classId);
    return cls ? cls.name : 'Unknown';
  }
}
