import dbConnect from "@/utils/dbConnect";
import Artist from "@/models/artist";

export const getArtistByHandle = async (handle) => {
    try {
        await dbConnect();

        // Querying by the 'handle' field
        const item = await Artist.findOne({ handle }).exec();
        if (!item) {
            throw new Error(`Artist with handle "${handle}" not found`);
        }
        return item;
    } catch (error) {
        throw new Error(`ERROR: ${error.message}`);
    }
};
