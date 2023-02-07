var json = {
    "id": 1,
          "mode": "PICKUP",
          "shipment_id": "AGC3IYO2",
          "package_id": "",
          "created_at": "2022-09-07T07:35:51.00Z",
          "amount": 1000,
          "has_adjustment": true
};

let id:number = json["id"];
let mode:string = json['shipment_id'];
let shipment_id:string = json['package_id'];
let package_id:string = json['created_at'];
let created_at:string = json['mode'];
let amount:number = json['amount'];
let has_adjustment:boolean = json['has_adjustment'];

console.log(id, typeof id);
console.log(mode, typeof mode);
console.log(shipment_id, typeof shipment_id);
console.log(package_id, typeof package_id);
console.log(created_at, typeof created_at);
console.log(amount, typeof created_at);
console.log(has_adjustment, typeof has_adjustment);
