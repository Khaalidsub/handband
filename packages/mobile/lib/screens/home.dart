import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  Position _currentPosition = Position();
  // String _currentAddress = "";

  final Geolocator geolocator = Geolocator()..forceAndroidLocationManager;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: TextButton(
            child: Text("Send Location"),
            onPressed: () {
              geolocator
                  .getCurrentPosition(desiredAccuracy: LocationAccuracy.best)
                  .then((Position position) => setState(() {
                        _currentPosition = position;
                      }));
              print(_currentPosition);
            }),
      ),
    );
  }
}
