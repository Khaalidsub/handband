import 'package:http/http.dart';

class UserService {
  final Uri uri = Uri.parse("http://188.166.214.228/api/users");

  registerUser() async {
    Response response = await post(uri, body: {"name": "abdalla"});

    print(response.body);
  }
}
