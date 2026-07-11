// // Factory pattern

// interface Notification {
//   send(message: string): void;
// }

// class EmailNofitication implements Notification {
//   send(message: string): void {
//     console.log(`Sending email: ${message}`);
//   }
// }

// class SMSNofitication implements Notification {
//   send(message: string): void {
//     console.log(`Sending SMS ${message}`);
//   }
// }

// class NofiticationFactory {
//   static createNofitication(type: "email" | "sms"): Notification {
//     switch (type) {
//       case "email":
//         return new EmailNofitication();
//       case "sms":
//         return new SMSNofitication();
//       default:
//         throw new Error("invalid notification type");
//     }
//   }
// }

// const emailNotification = NofiticationFactory.createNofitication("email");
// emailNotification.send("Hello via email");
// const smsNotification = NofiticationFactory.createNofitication("sms");
// smsNotification.send("Hello via sms");

class Channel {
  private subscribers: any[] = [];

  subscribe(subscriber: { id: number }) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriberId: number) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber.id !== subscriberId,
    );
  }

  notify(message: string) {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(message);
    });
  }
}

class Subscriber {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  update(message: string) {
    console.log(`${this.name} dobio notifikaciju: ${message}`);
  }
}

const channel = new Channel();

const sub1 = new Subscriber(1, "Mario");
const sub2 = new Subscriber(2, "Ivan");

channel.subscribe(sub1);
channel.subscribe(sub2);

channel.notify("Novi video je objavljen!");
// Mario dobio notifikaciju: Novi video je objavljen!
// Ivan dobio notifikaciju: Novi video je objavljen!

channel.unsubscribe(1);

channel.notify("Drugi video!");
// samo Ivan dobija, Mario je unsubscribovan
