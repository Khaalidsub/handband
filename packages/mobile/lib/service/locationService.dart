import 'dart:convert';

import 'package:http/http.dart';

class LocationService {
  final Uri uri = Uri.parse("http://188.166.214.228/api/locations");

  sendLocation(double lat, double long) async {
    try {
      Response response = await post(uri, body: {
        "latitude": jsonEncode(lat),
        "user": "6095942784cc1a00268bcbd5",
        "longitude": jsonEncode(long),
      });
      print(response.statusCode);
      print(response.body);
    } catch (e) {
      print(e);
    }
  }
}
