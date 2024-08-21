// models/artist.js
import {model, models, Schema} from "mongoose";

const artistSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true, },
    name: { type: String },
    handle: { type: String },
    description: { type: String },
    artistCode: { type: String, required: true },
    instagramLink: { type: String },
    pixivLink: { type: String },
    emailAddress: { type: String },
    discordId: { type: String},
    textBlurbOne: { type: String },
    textBlurbTwo: { type: String },
    textBlurbThree: { type: String },
});

const Artist = models.Artist || model('Artist', artistSchema);
Artist.schema.set('collection', 'artists');

export default Artist;
