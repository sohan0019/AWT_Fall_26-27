import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./entities/employee.entity";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(dto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(dto);
    return await this.employeeRepository.save(employee);
  }

  async getEmployees() {
    return await this.employeeRepository.find();
  }

  async getEmployeeById(id: string) {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) {
      throw new NotFoundException("Employee not found.");
    }
    return employee;
  }

  async updateEmployee(id: string, dto: UpdateEmployeeDto) {
    const employee = await this.getEmployeeById(id);
    Object.assign(employee, dto);
    return await this.employeeRepository.save(employee);
  }

  async deleteEmployee(id: string) {
    const employee = await this.getEmployeeById(id);
    await this.employeeRepository.remove(employee);
    return { message: "Employee deleted successfully." };
  }
}