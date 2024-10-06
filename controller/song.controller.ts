import { Request, Response } from "express";
import Topic from "../models/topic.model";
import Song from "../models/song.model";
import Singer from "../models/singer.model";

// [GET] /songs/
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

// [GET] /songs/detail/slugSong
export const detail = async (req: Request, res: Response) => {
  try {
    const slugSong = req.params.slugSong;

    const song = await Song.findOne({
      deleted: false,
      status: "active",
      slug: slugSong,
    });

    const singer = await Singer.findOne({
      deleted: false,
      _id: song.singerId,
    });

    const topic = await Topic.findOne({
      deleted: false,
      _id: song.topicId,
    });

    res.render("client/pages/songs/detail", {
      pageTitle: "Danh sách bài hát",
      song: song,
      topic: topic,
      singer: singer,
    });
  } catch (error) {
    res.send("404");
  }
};

// [PATCH] /songs/:typeLike/:songId
export const like = async (req: Request, res: Response) => {
  try {
    const songId = req.params.songId;
    const typeLike = req.params.typeLike;

    const song = await Song.findOne({
      _id: songId,
      deleted: false,
      status: "active",
    });

    let newLike;

    if (typeLike == "like") {
      newLike = song.like + 1;
      await Song.updateOne(
        {
          _id: songId,
        },
        {
          like: newLike,
        }
      );
    } else {
      newLike = song.like - 1;
      await Song.updateOne(
        {
          _id: songId,
        },
        {
          like: newLike,
        }
      );
    }

    // console.log(newLike);

    res.json({
      code: 200,
      message: "Thành công",
      newLike: newLike,
    });
  } catch (error) {
    res.send("404");
  }
};
