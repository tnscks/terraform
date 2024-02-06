"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          uuid: "023c05af-90b5-49bb-b6b3-7c284e0428c6",
          userId: "041c05af-90b5-49bb-b6b3-7c284e0428c6",
          name: "회사원셔츠 4종세트",
          image:
            "https://w3s.link/ipfs/bafybeidi7o3o3wiosdqidzrwbiwrgpm3jjltbw22caztuq2xdgtectoj6i/man-shirts-1.jpg",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeidi7o3o3wiosdqidzrwbiwrgpm3jjltbw22caztuq2xdgtectoj6i/man-shirts-1.jpg",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description:
            "옷장에 하나쯤은 있어야 할 머스트 해브 아이템! 캐주얼 또는 포멀룩 어디에도 매칭할 수 있는 폴라 보이즈 옥스포트 셔츠",
          brand: "폴라",
          category: "남자정장",
          size: '{ "95": 3, "100": 10, "105": 10, "110": 7 }',
          price: 120000,
          countInStock: 30,
          rating: 5,
          numReviews: 1,
          sale: 30,
          freeShipping: true,
          deliveryFee: 0,
          createdAt: "2022-01-01",
          updatedAt: "2022-01-01",
        },
        {
          uuid: "041c07af-90b5-50bb-b6b3-7c284e0428c6",
          userId: "041c05af-90b5-49bb-b6b3-7c284e0428c6",
          name: "회사원셔츠 2종세트",
          image:
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeidi7o3o3wiosdqidzrwbiwrgpm3jjltbw22caztuq2xdgtectoj6i/man-shirts-1.jpg",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description:
            "간절기 머스트 해브 아이템!!! 회사원 셔츠를 알뜰하게 구매해 보세요!",
          brand: "플로랄프로란",
          category: "남자정장",
          size: '{ "95": 3, "100": 9, "105": 10, "110": 7 }',
          price: 90000,
          countInStock: 29,
          rating: 3,
          numReviews: 2,
          sale: 10,
          freeShipping: false,
          deliveryFee: 3500,
          createdAt: "2022-01-01",
          updatedAt: "2022-01-02",
        },
        {
          uuid: "041c05af-90b5-49bb-b825-7c284e0428c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "신입사원 정장세트",
          image:
            "https://w3s.link/ipfs/bafybeif23dhzi5bdavydy4ts2te2goikrtiuys7but5nbwhtwxl5eevvyq/apparel-1.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeif23dhzi5bdavydy4ts2te2goikrtiuys7but5nbwhtwxl5eevvyq/apparel-1.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description: "멀란지그레이 하운드투스 익스트림 하프 정장",
          brand: "지이크파란오비",
          category: "남자정장",
          size: '{ "95": 3, "100": 0, "105": 10, "110": 7 }',
          price: 500000,
          countInStock: 20,
          rating: 2.3,
          numReviews: 3,
          sale: 20,
          freeShipping: false,
          deliveryFee: 2500,
          createdAt: "2022-02-02",
          updatedAt: "2022-02-03",
        },

        {
          uuid: "041c05af-10b2-49bd-b6b3-7c284e0428c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "에어조던 23 시리즈",
          image:
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
            "https://w3s.link/ipfs/bafybeif23dhzi5bdavydy4ts2te2goikrtiuys7but5nbwhtwxl5eevvyq/apparel-1.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
          ],
          description: "다시 돌아온 에어조던 시리즈",
          brand: "나이스",
          category: "운동화",
          size: '{"240": 3, "250": 10, "260": 10, "270": 5, "270": 7, "280": 5 }',
          price: 200000,
          countInStock: 35,
          rating: 4.3,
          numReviews: 4,
          sale: 20,
          freeShipping: false,
          deliveryFee: 3500,
          createdAt: "2022-03-01",
          updatedAt: "2022-03-05",
        },

        {
          uuid: "041c05af-90b5-49bb-a6a3-7c214e0428c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "발렌시아 운동화",
          image:
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description: "수식어가 필요없는 명품 운동화",
          brand: "발렌시아",
          category: "운동화",

          size: '{ "240": 3, "250": 10, "260": 10, "270": 1, "280": 3 }',
          price: 1200000,
          countInStock: 27,
          rating: 2.2,
          numReviews: 5,
          sale: 20,
          freeShipping: true,
          deliveryFee: 3500,
          createdAt: "2022-04-01",
          updatedAt: "2022-04-02",
        },
        {
          uuid: "041c05af-90b5-51bb-b6b3-7c574e0428c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "여자 정장 일자바지 슬랙스",
          image:
            "https://w3s.link/ipfs/bafybeidyottypwvecmqad4i7vk4gfvrkcghg7aoltr7yved2s2t6z5e2oi/woman-pants1.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeidyottypwvecmqad4i7vk4gfvrkcghg7aoltr7yved2s2t6z5e2oi/woman-pants1.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description: "가성비 최고, 색감과 핏감 모두 완벽한 일자핏 정장슬랙스",
          brand: "바이더웨이텐",
          category: "여자정장",
          size: '{ "44": 3, "55": 30, "66": 23, "77": 7 }',
          price: 50000,
          countInStock: 63,
          rating: 4.9,
          numReviews: 3.3,
          sale: 10,
          freeShipping: false,
          deliveryFee: 4000,
          createdAt: "2022-05-01",
          updatedAt: "2022-05-05",
        },
        {
          uuid: "623c05af-90b5-49bb-56b3-7c284e0428c6",
          userId: "041c05af-90b5-49bb-b6b3-7c284e0428c6",
          name: "[2]회사원셔츠 4종세트",
          image:
            "https://w3s.link/ipfs/bafybeidi7o3o3wiosdqidzrwbiwrgpm3jjltbw22caztuq2xdgtectoj6i/man-shirts-1.jpg",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeidi7o3o3wiosdqidzrwbiwrgpm3jjltbw22caztuq2xdgtectoj6i/man-shirts-1.jpg",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description:
            "옷장에 하나쯤은 있어야 할 머스트 해브 아이템! 캐주얼 또는 포멀룩 어디에도 매칭할 수 있는 폴라 보이즈 옥스포트 셔츠",
          brand: "폴라",
          category: "남자정장",
          size: '{ "95": 3, "100": 10, "105": 10, "110": 7 }',
          price: 120000,
          countInStock: 30,
          rating: 5,
          numReviews: 1,
          sale: 30,
          freeShipping: true,
          deliveryFee: 0,
          createdAt: "2022-06-01",
          updatedAt: "2022-06-05",
        },
        {
          uuid: "741c07af-90b5-49bb-77b3-7c284e0428c6",
          userId: "041c05af-90b5-49bb-b6b3-7c284e0428c6",
          name: "[2]회사원셔츠 2종세트",
          image:
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeidi7o3o3wiosdqidzrwbiwrgpm3jjltbw22caztuq2xdgtectoj6i/man-shirts-1.jpg",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description:
            "간절기 머스트 해브 아이템!!! 회사원 셔츠를 알뜰하게 구매해 보세요!",
          brand: "플로랄프로란",
          category: "남자정장",
          size: '{ "95": 3, "100": 9, "105": 10, "110": 7 }',
          price: 90000,
          countInStock: 29,
          rating: 3,
          numReviews: 2,
          sale: 10,
          freeShipping: false,
          deliveryFee: 3500,
          createdAt: "2022-07-01",
          updatedAt: "2022-07-05",
        },
        {
          uuid: "841c05af-90b5-49bb-88b1-7c284e0428c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "[2]신입사원 정장세트",
          image:
            "https://w3s.link/ipfs/bafybeif23dhzi5bdavydy4ts2te2goikrtiuys7but5nbwhtwxl5eevvyq/apparel-1.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeif23dhzi5bdavydy4ts2te2goikrtiuys7but5nbwhtwxl5eevvyq/apparel-1.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description: "멀란지그레이 하운드투스 익스트림 하프 정장",
          brand: "지이크파란오비",
          category: "남자정장",
          size: '{ "95": 3, "100": 0, "105": 10, "110": 7 }',
          price: 500000,
          countInStock: 20,
          rating: 2.3,
          numReviews: 3,
          sale: 20,
          freeShipping: false,
          deliveryFee: 2500,
          createdAt: "2022-08-02",
          updatedAt: "2022-08-03",
        },

        {
          uuid: "041c05af-10b2-49bd-b6b3-7c284e4528c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "[2]에어조던 23 시리즈",
          image:
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
            "https://w3s.link/ipfs/bafybeif23dhzi5bdavydy4ts2te2goikrtiuys7but5nbwhtwxl5eevvyq/apparel-1.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
          ],
          description: "다시 돌아온 에어조던 시리즈",
          brand: "나이스",
          category: "운동화",
          size: '{"240": 3, "250": 10, "260": 10, "270": 5, "270": 7, "280": 5 }',
          price: 200000,
          countInStock: 35,
          rating: 4.3,
          numReviews: 4,
          sale: 20,
          freeShipping: false,
          deliveryFee: 3500,
          createdAt: "2022-09-01",
          updatedAt: "2022-09-05",
        },

        {
          uuid: "941c05af-90b5-49bb-a6a3-7c945e0428c6",
          userId: "041c05af-90b5-45bb-b6b3-7c284e0428c6",
          name: "[2]발렌시아 운동화",
          image:
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description: "수식어가 필요없는 명품 운동화",
          brand: "발렌시아",
          category: "운동화",

          size: '{ "240": 3, "250": 10, "260": 10, "270": 1, "280": 3 }',
          price: 1200000,
          countInStock: 27,
          rating: 2.2,
          numReviews: 5,
          sale: 20,
          freeShipping: true,
          deliveryFee: 3500,
          createdAt: "2022-10-01",
          updatedAt: "2022-10-02",
        },
        {
          uuid: "101c05af-90b5-49bb-b6b3-7c574e0518c6",
          userId: "042222af-90b5-45bb-b6b3-7c284e0428c6",
          name: "[2]여자 정장 일자바지 슬랙스",
          image:
            "https://w3s.link/ipfs/bafybeidyottypwvecmqad4i7vk4gfvrkcghg7aoltr7yved2s2t6z5e2oi/woman-pants1.png",
          thumbnail: [
            "https://w3s.link/ipfs/bafybeidyottypwvecmqad4i7vk4gfvrkcghg7aoltr7yved2s2t6z5e2oi/woman-pants1.png",
            "https://w3s.link/ipfs/bafybeidujgajt4dby7ws6ii7mg5gkwwjddqoqyvsk4lwisufeupti4fg7i/man-shirts-2.png",
            "https://w3s.link/ipfs/bafybeicbjhyhmokbodeocaxfxahdl4gsxuqqkyeoqsvm46wzqmby7ehcba/footwear-1.png",
            "https://w3s.link/ipfs/bafybeicfvkf34c4rrckfo7h2aipkbgbcnm442bxuot5irbpwoqg7shokfu/footwear-2.png",
          ],
          description: "가성비 최고, 색감과 핏감 모두 완벽한 일자핏 정장슬랙스",
          brand: "바이더웨이텐",
          category: "여자정장",
          size: '{ "44": 3, "55": 30, "66": 23, "77": 7 }',
          price: 50000,
          countInStock: 63,
          rating: 4.9,
          numReviews: 3.3,
          sale: 10,
          freeShipping: false,
          deliveryFee: 4000,
          createdAt: "2022-10-03",
          updatedAt: "2022-10-05",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};