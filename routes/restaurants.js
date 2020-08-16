const express = require("express");
const router = express.Router();
const config = require('config')

const Restaurant = require("../models/Restaurant");

router.get('/', async (req, res)=>{

    try {
       let restaurant = await Restaurant.find()
       res.send(restaurant)
    } catch (error) {
        console.log(error)
    }

})

router.post('/', async (req, res) => {

    try {
        const {name, monday, tuesday, wednesday, thursday, friday, saturday, sunday} = req.body

        let restaurant = await Restaurant.findOne({ name });

        if (restaurant) {
            return res.status(400).json({ msg: "Restaurant already exists" });
        }

        restaurant = new Restaurant({
            name: name,
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            saturday: saturday,
            sunday: sunday
        });

      await restaurant.save();

      res.send("success")

    } catch (error) {
        console.log(error)
    }



})

module.exports = router;