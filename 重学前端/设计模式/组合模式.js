// 使用场景：
// A.含有某种层级结构的对象集合(具体结构在开发过程中无法确定)
// B.希望对这些对象或者其中的某些对象执行某种操作
// 缺点：
// 因为组合对象的任何操作都会对所有的子对象调用同样的操作，所以当组合的结构很大时会有性能问题。
// 链接：https://www.jianshu.com/p/a6e236040505

// 一、定义
// 将对象组合成树形结构以表示“部分-整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。
// 角色：
// （1）子对象
// （2）组合对象
// （3）抽象类：主要定义了参与组合的对象的公共接口，也可以直接在组合对象中定义


// 二、举例
// 场景 以员工为例。这里我们有不同的员工类型
// 开发者
class Developer {
  constructor(name, salary) {
      this.name = name
      this.salary = salary
  }
  getName() {
      return this.name
  }
  setSalary(salary) {
      this.salary = salary
  }
  getSalary() {
      return this.salary
  }
  getRoles() {
      return this.roles
  }
  develop() {
      /* */
  }
}
// 设计师
class Designer {
  constructor(name, salary) {
      this.name = name
      this.salary = salary
  }
  getName() {
      return this.name
  }
  setSalary(salary) {
      this.salary = salary
  }
  getSalary() {
      return this.salary
  }
  getRoles() {
      return this.roles
  }
  design() {
      /* */
  }
}
// 一个由几种不同类型的员工组成的组织
class Organization {
  constructor(){
      this.employees = []
  }
  // 追加元素
  addEmployee(employee) {
      this.employees.push(employee)
  }
  //  叶对象都有一样的getSalary方法。在根对象执行的时候，可以使用leaf.execute的模式来调用对象的方法。
  getNetSalaries() {
      let netSalary = 0
      this.employees.forEach(employee => {
          netSalary += employee.getSalary()
      })
      return netSalary
  }
}
// 调用
// Prepare the employees
const john = new Developer('John Doe', 12000)
const jane = new Designer('Jane', 10000)
// Add them to organization 优势：无论多少员工类型 对整个组合对象只调用一次
const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)
console.log("Net salaries: " , organization.getNetSalaries()) // Net Salaries: 22000