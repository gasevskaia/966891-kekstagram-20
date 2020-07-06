'use strict';
var getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var mockData = function () {
  var photos = [];
  var userNames = ['Юлия', 'Алексей', 'Дарья', 'Михаил', 'Алёна', 'Мария'];
  var userComments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  for (var index = 0; index < 25; index++) {
    var comments = [];
    var commentsAmount = getRandomIntInclusive(1, 6);
    for (var commentIndex = 0; commentIndex < commentsAmount; commentIndex++) {
      var userIndexRandom = getRandomIntInclusive(0, 5);
      comments[commentIndex] = {
        avatar: 'img/avatar-' + userIndexRandom + '.svg',
        message: userComments[getRandomIntInclusive(0, 5)],
        name: userNames[userIndexRandom]
      };
    }

    photos[index] = {
      url: 'photos/' + (index + 1) + '.jpg',
      description: 'йцукенгшщзхъ',
      likes: getRandomIntInclusive(15, 200),
      comments: comments
    };
  }
  return photos;
};

var fillTemplate = function (template, photoData) {
  var clonedElement = template.cloneNode(true);
  clonedElement.querySelector('.picture__img').src = photoData.url;
  clonedElement.querySelector('.picture__likes').textContent = photoData.likes;
  clonedElement.querySelector('.picture__comments').textContent = photoData.comments.length;
  return clonedElement;
};

var render = function (dataArray) {
  var templateContent = document.querySelector('#picture').content;
  var pictures = document.querySelector('.pictures');

  for (var index = 0; index < dataArray.length; index++) {
    var clonedElement = fillTemplate(templateContent, dataArray[index]);
    pictures.appendChild(clonedElement);
  }
};

var data = mockData();
render(data);
