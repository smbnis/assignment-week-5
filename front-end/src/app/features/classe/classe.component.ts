import { Component, OnInit } from '@angular/core';
import { Class } from '../../shared/interfaces/class';
import { ClassService } from '../../shared/services/class/class.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {
  classes: Class[] = [];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

  addClass(name: string): void {
    const newClass: Class = { name };
    this.classService.createClass(newClass).subscribe(cls => {
      this.classes.push(cls);
    });
  }

  updateClass(cls: Class): void {
    this.classService.updateClass(cls._id!, cls).subscribe(updatedClass => {
      const index = this.classes.findIndex(c => c._id === updatedClass._id);
      if (index !== -1) {
        this.classes[index] = updatedClass;
      }
    });
  }

  deleteClass(id: string = ""): void {
    this.classService.deleteClass(id).subscribe(() => {
      this.classes = this.classes.filter(cls => cls._id !== id);
    });
  }
}
