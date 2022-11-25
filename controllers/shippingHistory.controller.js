require('dotenv').config();

// Models
const { ShippingStatus } = require('../database/shippingStatus.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const showHistory = catchAsync(async (req,res,next) => {
    const { shipping_id } = req.params.shipping_id;

    const shippingHistory = await ShippingStatus.findAll({where: { shipping_id },order:{createdAt}});

    if(shippingHistory){
        return res.status(200).json({
            message:'success',
            shippingHistory
        });
    } else {
        return res.status(404).json({
            message: 'Shipping History not found'
        });
    }
});

module.exports = {
    showHistory
}