export interface IGenerator {
  id: string;
  name: string;
  description: string;
  hotDogsPerSeconds: number;
  timeSpan: number;
  cost: number;
}

export const hotDogsGenerators: IGenerator[] = [
  {
    id: "hotDogsCursor",
    name: "Cursor",
    description: "An autoclicker cursor that generates 1 hot dog every 10 seconds",
    hotDogsPerSeconds: 1,
    timeSpan: 10,
    cost: 50
  },
  {
    id: "hotDogsCart",
    name: "Cart",
    description: "Hot dog cart that generates 2 hot dogs every 5 seconds",
    hotDogsPerSeconds: 2,
    timeSpan: 5,
    cost: 100
  },
  {
    id: "hotDogsRestaurant",
    name: "Hot Dog Restaurant",
    description: "Hot dog restaurant that generates 5 hot dogs every 2 seconds",
    hotDogsPerSeconds: 5,
    timeSpan: 2,
    cost: 1000
  },
  {
    id: "hotDogsFactory",
    name: "Hot Dog Factory",
    description: "Hot dog factory that generates 10 hot dogs every 1 seconds",
    hotDogsPerSeconds: 10,
    timeSpan: 1,
    cost: 100000
  }
]