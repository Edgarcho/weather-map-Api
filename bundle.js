(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
exports.apiKey="0861176A572e9a20ec6bb0e19215126c";

},{}],2:[function(require,module,exports){
'use strict';

var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    var city = $('#location').val();
    $('#location').val("");

    var promise = new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=$' + apikey;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function (response) {
      body = JSON.parse(response);
      $('.showHumidity').text('The humidity in ' + city + ' is ' + body.main.humidity + '%');
      $('.showTemp').text('The temperature in Kelvins is ' + body.main.temp + ' degrees.');
    }, function (error) {
      $('.showErrors').text('There was an error processing your request: ' + error.message);
    });
  });
});

},{"./../.env":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuZW52IiwianMvd2VhdGhlci1pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOzs7O0FDREEsSUFBSSxTQUFTLFFBQVEsV0FBUixFQUFxQixNQUFsQzs7QUFFQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVc7QUFDM0IsSUFBRSxrQkFBRixFQUFzQixLQUF0QixDQUE0QixZQUFXO0FBQ3JDLFFBQUksT0FBTyxFQUFFLFdBQUYsRUFBZSxHQUFmLEVBQVg7QUFDQSxNQUFFLFdBQUYsRUFBZSxHQUFmLENBQW1CLEVBQW5COztBQUVBLFFBQUksVUFBVSxJQUFJLE9BQUosQ0FBWSxVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEI7QUFDbEQsVUFBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsVUFBSSxNQUFNLHNEQUFvRCxJQUFwRCxnQkFBb0UsTUFBOUU7QUFDQSxjQUFRLE1BQVIsR0FBaUIsWUFBVztBQUMxQixZQUFJLEtBQUssTUFBTCxLQUFnQixHQUFwQixFQUF5QjtBQUN2QixrQkFBUSxRQUFRLFFBQWhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sTUFBTSxRQUFRLFVBQWQsQ0FBUDtBQUNEO0FBQ0YsT0FORDtBQU9BLGNBQVEsSUFBUixDQUFhLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUIsSUFBekI7QUFDQSxjQUFRLElBQVI7QUFDRCxLQVphLENBQWQ7O0FBY0EsWUFBUSxJQUFSLENBQWEsVUFBUyxRQUFULEVBQW1CO0FBQzlCLGFBQU8sS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFQO0FBQ0EsUUFBRSxlQUFGLEVBQW1CLElBQW5CLHNCQUEyQyxJQUEzQyxZQUFzRCxLQUFLLElBQUwsQ0FBVSxRQUFoRTtBQUNBLFFBQUUsV0FBRixFQUFlLElBQWYsb0NBQXFELEtBQUssSUFBTCxDQUFVLElBQS9EO0FBQ0QsS0FKRCxFQUlHLFVBQVMsS0FBVCxFQUFnQjtBQUNqQixRQUFFLGFBQUYsRUFBaUIsSUFBakIsa0RBQXFFLE1BQU0sT0FBM0U7QUFDRCxLQU5EO0FBT0QsR0F6QkQ7QUEwQkQsQ0EzQkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImV4cG9ydHMuYXBpS2V5PVwiMDg2MTE3NkE1NzJlOWEyMGVjNmJiMGUxOTIxNTEyNmNcIjtcbiIsInZhciBhcGlLZXkgPSByZXF1aXJlKCcuLy4uLy5lbnYnKS5hcGlLZXk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAkKCcjd2VhdGhlckxvY2F0aW9uJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNpdHkgPSAkKCcjbG9jYXRpb24nKS52YWwoKTtcbiAgICAkKCcjbG9jYXRpb24nKS52YWwoXCJcIik7XG5cbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIGxldCB1cmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JGAgK2FwaWtleTtcbiAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoRXJyb3IocmVxdWVzdC5zdGF0dXNUZXh0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgfSk7XG5cbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGJvZHkgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICQoJy5zaG93SHVtaWRpdHknKS50ZXh0KGBUaGUgaHVtaWRpdHkgaW4gJHtjaXR5fSBpcyAke2JvZHkubWFpbi5odW1pZGl0eX0lYCk7XG4gICAgICAkKCcuc2hvd1RlbXAnKS50ZXh0KGBUaGUgdGVtcGVyYXR1cmUgaW4gS2VsdmlucyBpcyAke2JvZHkubWFpbi50ZW1wfSBkZWdyZWVzLmApO1xuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAkKCcuc2hvd0Vycm9ycycpLnRleHQoYFRoZXJlIHdhcyBhbiBlcnJvciBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19
