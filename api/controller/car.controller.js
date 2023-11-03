import Car from "../schema/car.schema";

// Controller for creating a new car
export const createCar = async (req, res) => {
  try {
    const { user, carModel, price, phoneNumber, image } = req.body;
    const newCar = new Car({ user, carModel, price, phoneNumber, image });
    const savedCar = await newCar.save();
    res.json({ message: "Car Saved", success: true });
  } catch (error) {
    res.json({ error: error.message, success: false });
  }
};
