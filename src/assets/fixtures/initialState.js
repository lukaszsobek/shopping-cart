const initialState = {
    availableProducts: [
        {
            name: "Product1",
            comments: "",
            net_price: 8.00,
            tax: 19
        },{
            name: "Product2",
            comments: "",
            net_price: 11.00,
            tax: 19
        },{
            name: "Product3",
            comments: "",
            net_price: 16.25,
            tax: 7
        },{
            name: "Product4",
            comments: "",
            net_price: 12.00,
            tax: 7
        }
    ],
    cartContent: [],
    editItemId: null,
    formContent: {
        comment: ""
    },
    isModalShown: false
};

export default initialState;