import { Request, Response } from "express";
import Topic from "../models/topic.model";
import Song from "../models/song.model";
import Singer from "../models/singer.model";

// [GET] /topics/
export const index = async (req: Request, res: Response) => {
  try {
    const slugTopic = req.params.slugTopic;

    const topic = await Topic.findOne({
      deleted: false,
      status: "active",
      slug: slugTopic,
    });

    // console.log(topic);

    const songs = await Song.find({
      deleted: false,
      topicId: topic.id,
    });

    for (const item of songs) {
      const singer = await Singer.findOne({
        deleted: false,
        _id: item.singerId,
      });

      if (singer) {
        item["singerName"] = singer.fullName;
      } else {
        item["singerName"] = "Unknown"; //
      }
    }

    res.render("client/pages/songs/index", {
      pageTitle: "Danh sách bài hát",
      slugTopic: slugTopic,
      songs: songs,
    });
  } catch (error) {
    res.send("404");
  }
};
