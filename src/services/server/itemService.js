import dbConnect from "@/utils/dbConnect";
import Item from "@/models/item";

// Function to get an item by its ID
export const getItemById = async (itemId) => {
    try {
        await dbConnect();

        const item = await Item.findById(itemId).exec();
        if (!item) {
            throw new Error(`Item with ID ${itemId} not found`);
        }
        return item;
    } catch (error) {
        throw new Error('Failed to get item by ID');
    }
};

// Function to get items by artist ID
export const getItemsByArtist = async (artistId) => {
    try {
        await dbConnect();

        const items = await Item.find({ artistId: artistId }).exec();
        if (!items || items.length === 0) {
            return { };
        }
        return items;
    } catch (error) {
        throw new Error(`ERROR: ${error}`);
    }
};
