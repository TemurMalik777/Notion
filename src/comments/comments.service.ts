import { Injectable } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Comment } from "./models/comment.model";

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment) private readonly commentsModule: typeof Comment
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      return await this.commentsModule.create(createCommentDto);
    } catch (error) {
      throw new Error("Komment yaratishda xatolik yuz berdi: " + error.message);
    }
  }

  async findAll(): Promise<Comment[]> {
    try {
      return await this.commentsModule.findAll({ include: { all: true } });
    } catch (error) {
      throw new Error(
        "Kommentlarni olishda xatolik yuz berdi: " + error.message
      );
    }
  }

  async findOne(id: number): Promise<Comment | null> {
    try {
      return await this.commentsModule.findByPk(id);
    } catch (error) {
      throw new Error("Kommentni topishda xatolik yuz berdi: " + error.message);
    }
  }

  async update(
    id: number,
    updateCommentDto: UpdateCommentDto
  ): Promise<Comment | null> {
    try {
      const updatedComment = await this.commentsModule.update(
        updateCommentDto,
        {
          where: { id },
          returning: true,
        }
      );

      return updatedComment[1][0];
    } catch (error) {
      throw new Error(
        "Kommentni yangilashda xatolik yuz berdi: " + error.message
      );
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const deleteComment = await this.commentsModule.destroy({
        where: { id },
      });
      if (deleteComment > 0) {
        return "Komment o'chirildi";
      }
      return "Bunday komment mavjud emas";
    } catch (error) {
      throw new Error(
        "Kommentni o'chirishda xatolik yuz berdi: " + error.message
      );
    }
  }
}
