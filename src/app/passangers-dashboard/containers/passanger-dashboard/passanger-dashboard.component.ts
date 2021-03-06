import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";
import { PassengersService } from "../../services/passengers-service.service";
@Component({
  selector: "app-passanger-dashboard",
  templateUrl: "./passanger-dashboard.component.html",
  styleUrls: ["./passanger-dashboard.component.scss"]
})
export class PassangerDashboardComponent implements OnInit {
  passengers: Passenger[];
  searchList: Passenger[];
  name: string = "";
  constructor(private passangersService: PassengersService) {}

  handleEdit(event: Passenger): void {
    this.passangersService.editPassenger(event).subscribe(data => {
      this.passengers = this.passengers.map(passenger => {
        if (event.id == passenger.id) {
          const { fullname } = event;
          return { ...passenger, fullname };
        }
        return passenger;
      });
    });
  }

  handleDelete(event: Passenger) {
    this.passangersService.deletePassenger(event).subscribe(data => {
      this.passengers = this.passengers.filter(passenger => {
        return event.id != passenger.id;
      });
    });
  }

  ngOnInit() {
    this.passangersService.getPassengers().subscribe((data: Passenger[]) => {
      console.log(data);
      this.passengers = data;
    });
  }
}
