import 'package:flutter/material.dart';

const primaryColor = Colors.green;

class CustomButton extends StatelessWidget {
  const CustomButton({super.key});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      style: customButtonStyle,
      onPressed: () {},
      child: const Text('BUTTON'),
    );
  }
}

final ButtonStyle customButtonStyle = ElevatedButton.styleFrom(
  backgroundColor: const Color.fromARGB(255, 214, 214, 214),
  foregroundColor: Colors.black,
);

void main() => runApp(
      MaterialApp(
        theme: ThemeData(
          primaryColor: const Color.fromARGB(255, 7, 131, 116),
        ),
        home: Scaffold(
          appBar: AppBar(
              title: const Text('Example 1'), backgroundColor: primaryColor),
          body: Column(
            children: <Widget>[
              Image.asset('assets/images/image.png', width: 150, height: 150),
              const SizedBox(height: 40),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: const [
                CustomButton(),
                SizedBox(width: 70),
                CustomButton(),
              ]),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: const [
                CustomButton(),
                SizedBox(width: 70),
                CustomButton(),
              ]),
              const SizedBox(height: 40),
              Row(children: const [
                SizedBox(width: 20),
                Text('Email'),
                SizedBox(width: 40),
                Expanded(
                  child: TextField(
                    decoration: InputDecoration(
                      enabledBorder: UnderlineInputBorder(
                        //<-- SEE HERE
                        borderSide: BorderSide(
                            width: 2, color: Color.fromARGB(255, 120, 15, 15)),
                      ),
                    ),
                  ),
                ),
                SizedBox(width: 50),
              ]),
            ],
          ),
        ),
      ),
    );
