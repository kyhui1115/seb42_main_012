package main012.server.gym.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.*;
import java.time.LocalDateTime;

public class GymReviewDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @Min(1) @Max(5)
        private int gymGrade;

        @NotBlank(message = "리뷰를 작성해주세요")
        @Size(min = 20)
        private String gymComment;

        private Long gymId;

        private Long memberId;

    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        private Long id;


        @Min(1) @Max(5)
        private int gymGrade;

        @NotBlank(message = "리뷰를 작성해주세요")
        @Size(min = 20)
        private String gymComment;

        public long getId() {
            return id;
        }
        public void setId(Long id) {
            this.id = id;
        }
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long memberId;
        private Long gymReviewId;
        private String displayName;

        private int gymGrade;

        private String gymComment;
        @Column(name = "created_at", updatable = false)
        private LocalDateTime createdAt = LocalDateTime.now();

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ReviewInfo {
        private Long gymReviewId;
        private Long memberId;
        private String displayName;
        private int grade;
        private String comment;
        private String createdAt;
    }


}


