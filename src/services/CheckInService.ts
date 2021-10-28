import CheckIn from "models/CheckIn";
import CHECK_INS from "pages/CheckOutForm/constants/checkIns";

const getBySpotId = (spotId: number) => CHECK_INS.find(checkIn => checkIn.spotId === spotId);

const save = (checkIn: CheckIn) => {};

export { getBySpotId, save };
