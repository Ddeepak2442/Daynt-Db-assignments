import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Model } from './Model';

class Car {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public company!: string;

  @prop({ ref: 'Model', localField: '_id', foreignField: 'referenceId', match: { type: 'Car' } })
  public models?: Ref<Model>[];
}

const CarModel = getModelForClass(Car);
export { Car, CarModel };
