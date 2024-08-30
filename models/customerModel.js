const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Customer phone number required"],
      validate: {
        validator: function (v) {
          return /^\+\d{1,3}\d{7,15}$/.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid phone number! Phone number must include a country code with a + sign.`,
      },
    },
    education: [
      {
        degree: {
          type: String,
          required: [true, "Degree is required"],
        },
        institution: {
          type: String,
          required: [true, "Institution is required"],
          minlength: [3, "Institution name must be at least 3 characters long"],
        },
        yearOfCompletion: {
          type: Number,
          required: [true, "Year of completion is required"],
          min: [1900, "Year of completion cannot be earlier than 1900"],
          max: [
            new Date().getFullYear(),
            "Year of completion cannot be in the future",
          ],
        },
      },
    ],
    address: {
      street: {
        type: String,
        trim: true,
        maxlength: [100, "Street cannot exceed 100 characters"],
      },
      city: {
        type: String,
        trim: true,
        maxlength: [50, "City cannot exceed 50 characters"],
      },
      state: {
        type: String,
        trim: true,
        maxlength: [50, "State cannot exceed 50 characters"],
      },
      postalCode: {
        type: String,
        trim: true,
        match: [
          /^\d{5}(-\d{4})?$/,
          "Please use a valid postal code format (e.g., 12345 or 12345-6789)",
        ],
      },
      country: {
        type: String,
        trim: true,
        maxlength: [50, "Country cannot exceed 50 characters"],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
