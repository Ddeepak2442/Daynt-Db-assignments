import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Car } from './Car';
import { Bike } from './Bike';

class Model {
  @prop({ required: true })
  public modelNumber!: string;

  @prop({ required: true })
  public version!: string;

  @prop({ required: true, enum: ['Car', 'Bike'] })
  public type!: string;

  @prop({ required: true })
  public referenceId!: Ref<Car | Bike>;
}

const ModelModel = getModelForClass(Model);
export { Model, ModelModel };
