import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Model } from './Model';

class Bike {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public company!: string;

  @prop({ ref: 'Model', localField: '_id', foreignField: 'referenceId', match: { type: 'Bike' } })
  public models?: Ref<Model>[];
}

const BikeModel = getModelForClass(Bike);
export { Bike, BikeModel };
