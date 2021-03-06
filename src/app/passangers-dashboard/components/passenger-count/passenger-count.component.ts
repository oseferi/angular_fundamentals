import { Component, OnInit, Input } from "@angular/core";
import { Passenger } from "../../models/Passenger.interface";

@Component({
  selector: "passenger-count",
  templateUrl: "./passenger-count.component.html",
  styleUrls: ["./passenger-count.component.scss"]
})
export class PassengerCountComponent implements OnInit {
  @Input() passengers: Passenger[];

  constructor() {}

  ngOnInit() {}

  get checkedInCount(): number {
    if (!this.passengers) return 0;
    return this.passengers.filter(passenger => {
      return passenger.checkedIn;
    }).length;
  }
}
