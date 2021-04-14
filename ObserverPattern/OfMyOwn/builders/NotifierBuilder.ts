import LinkedListNotifier from '../concreteClasses/Notifier/LinkedListNotifier.ts';

class NotifierBuilder {
  static build(ds: string) {
    if(ds.match(/^linked[- ]?lists?/gi)) {
      return new LinkedListNotifier();
    }

    // Default case
    return new LinkedListNotifier();
  }
}

export default NotifierBuilder;