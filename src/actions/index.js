export const ADD_FEATURE_TO_CAR = "ADD_FEATURE_TO_CAR";
export const REMOVE_FEATURE_FROM_CAR = "REMOVE_FEATURE_FROM_CAR";

export const addFeatureToCar = featureObj => {
    console.log(featureObj);
    return {type:ADD_FEATURE_TO_CAR, payload:featureObj};
}

export const removeFeatureFromCar = featureObj => {
    return {type:REMOVE_FEATURE_FROM_CAR, payload:featureObj};
}