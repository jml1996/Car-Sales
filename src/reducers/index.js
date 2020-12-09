// import { act } from 'react-dom/test-utils';

import { ADD_FEATURE_TO_CAR, REMOVE_FEATURE_FROM_CAR } from './../actions';

export const initialState = {
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
      },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ],
    additionalPrice: 0
};


export const featuresReducer = (state = initialState, action) => {
    switch(action.type) {
        // action should be feature obj
        case(ADD_FEATURE_TO_CAR):
            console.log(action);
            return({...state,
                car: {...state.car,
                    // price: state.car.price + action.payload.price,
                    features: [...state.car.features, {
                        id:action.payload.id, 
                        name:action.payload.name, 
                        price:action.payload.price
                    }]
                },
                // Removes from features list (only one use of feature per car):
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id),
                additionalPrice: state.additionalPrice + action.payload.price
                // ...state.members, {name: action.payload, dragonStatus:false }]
            });
        // action should be feature obj
        case(REMOVE_FEATURE_FROM_CAR):
            return({...state,
                car: {...state.car,
                    // price: state.car.price + action.payload.price,
                    features: state.car.features.filter(feature => feature.id !== action.payload.id)
                },
                additionalFeatures: [...state.additionalFeatures, {
                    id:action.payload.id,
                    name:action.payload.name,
                    price:action.payload.price
                }],
                additionalPrice: state.additionalPrice - action.payload.price
            });
        default:
            return(state);
    }
}