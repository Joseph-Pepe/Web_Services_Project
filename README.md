# Web Application

Improves communication between the instructor and students during a class session.

-----

<b>Apache (Web Server)</b>

-----

# Implementation

<b>Scripting Language:</b> JavaScript (NodeJS runtime environment)

<b>Web Server:</b> Local Machine (localhost)

<b>Database Server:</b> MySQL (PHPMyAdmin)


`Step #1: (Download)` <b>XAMPP (Apache, MySQL)</b> web server package (only use Apache web server and MySQL database server).

[![Screen Shot 2022-03-12 at 7 54 27 PM](https://user-images.githubusercontent.com/32807576/158040258-69a4ae87-2a80-4c45-b6dc-c01b35c4671b.png)](https://www.apachefriends.org/index.html)

`Step #2: (Setup)` Control panel select "start" in the "General tab" & in the "Services tab" select "start all".


![Screen Shot 2022-03-12 at 8 23 20 PM](https://user-images.githubusercontent.com/32807576/158040848-6fbe6fec-bd4e-4c15-9ed9-9a5f5d9adb3b.png)
![Screen Shot 2022-03-12 at 8 23 39 PM](https://user-images.githubusercontent.com/32807576/158040849-6daae533-50ed-497b-9b76-ff094ef8268c.png)

`Step #3:` Control panel select "enable" for "localhost: 8080" in the "Network tab".

![Screen Shot 2022-03-18 at 5 16 38 PM](https://user-images.githubusercontent.com/32807576/159084136-b2dba10a-b109-4b10-9b51-9dc739a85e95.png)


`Step #4: (Test)` Control panel select "Go to Application" to test the local server (see if this page pops up).

![Screen Shot 2022-03-12 at 8 32 48 PM](https://user-images.githubusercontent.com/32807576/158041008-f60ee8a5-b42c-4270-ab3e-771bbc335b80.png)

`Web Server (Completed)` Go into your local folder (double-click) "lampp".

Inside you will find the htdocs folder (stores the applications that you want to run on the web server).

![Screen Shot 2022-03-12 at 8 36 37 PM](https://user-images.githubusercontent.com/32807576/158041100-2b95d297-897d-46a5-b95e-bb70f44668c0.png)

This is the folder that it automatically goes to everytime you type in the `IP Address` of this localhost.

To have an application run on this server, place it in the `htdocs` folder and provide the path after the localhost IP address.

![Screen Shot 2022-03-12 at 8 36 49 PM](https://user-images.githubusercontent.com/32807576/158041102-559c0ec2-f794-4472-936e-8ad9d635096f.png)

-----

<b>PHPMyAdmin (Web-based Client)</b>

-----

`Step #1: (Setup)` Control panel select "start" in the "General tab" for "Apache" & "MySQL".

![Screen Shot 2022-03-12 at 8 23 20 PM](https://user-images.githubusercontent.com/32807576/158040848-6fbe6fec-bd4e-4c15-9ed9-9a5f5d9adb3b.png)
![Screen Shot 2022-03-12 at 8 23 39 PM](https://user-images.githubusercontent.com/32807576/158040849-6daae533-50ed-497b-9b76-ff094ef8268c.png)

`Step #2:` Control panel select "enable" for "localhost: 8080" in the "Network tab".

![Screen Shot 2022-03-18 at 5 16 38 PM](https://user-images.githubusercontent.com/32807576/159084136-b2dba10a-b109-4b10-9b51-9dc739a85e95.png)

`Step #3:` In the "web browser (e.g., safari)" type "http://localhost:8080/phpmyadmin/" in the address bar.

![Screen Shot 2022-03-18 at 5 20 34 PM](https://user-images.githubusercontent.com/32807576/159084485-1e8f3f8c-c2d6-40b9-a0c3-09b089f8810a.png)

![Screen Shot 2022-03-18 at 5 21 00 PM](https://user-images.githubusercontent.com/32807576/159084537-c663b010-c5e6-4ec6-82a8-3ca245ad75bf.png)

-----

<b>SQL Script (Create Database)</b>

-----

![Screen Shot 2022-05-09 at 4 38 39 PM](https://user-images.githubusercontent.com/32807576/167495504-af2b6765-b1e1-4a14-938d-3d098e430f6f.png)
![Screen Shot 2022-05-09 at 4 39 56 PM](https://user-images.githubusercontent.com/32807576/167495508-32e1eed6-68e0-429b-9196-9628c92e1ac6.png)

`Step #1:` In the "PHPMyAdmin page" click the "import" to go to the "import tab".

![Screen Shot 2022-03-18 at 5 26 14 PM](https://user-images.githubusercontent.com/32807576/159085025-e9475d35-bbad-4505-ac3d-83927a333437.png)

`Step #2:` Click the "Choose File" button in the "File to Import" section (`create_database.sql`).

![Screen Shot 2022-03-18 at 5 32 45 PM](https://user-images.githubusercontent.com/32807576/159085731-7c1b8c69-8560-4e4d-bc39-30e5012a86e5.png)

`Step #3:` Click the "Go" button to run the script that's in the file.

![Screen Shot 2022-03-18 at 5 26 14 PM](https://user-images.githubusercontent.com/32807576/159086073-b72872e1-23ec-4a78-b4e6-cb413d365db3.png)

![Screen Shot 2022-03-18 at 5 52 27 PM](https://user-images.githubusercontent.com/32807576/159088552-aba64fb0-920d-4d78-881c-4c64eaf80f4c.png)

-----

<b>NodeJS (Installation & Server Startup)</b>

-----

`Step #1:` Install NodeJS on the computer to use.

![Screen Shot 2022-05-17 at 7 28 48 AM](https://user-images.githubusercontent.com/32807576/168800878-abe80335-3e96-4226-8d32-ee2d94540747.png)

`Step #2:` After installing, you can check the node version.

![Screen Shot 2022-05-17 at 7 28 19 AM](https://user-images.githubusercontent.com/32807576/168800770-1e0b5b6c-fba7-439f-877c-9b5b341b8196.png)

`Step #3:` Run <b>npm init</b> to create an environment for an application (creates a `package.json` file for the application).

![Screen Shot 2022-05-17 at 7 31 18 AM](https://user-images.githubusercontent.com/32807576/168801284-7e13c50a-705f-4f6d-b166-8f991390081f.png)

`Step #4:` Create an application, and name it `app_1.js` using either a text editor (e.g., notepad) or IDE (e.g., VSCode).

![Screen Shot 2022-05-17 at 7 37 47 AM](https://user-images.githubusercontent.com/32807576/168802283-a6958841-2eb2-4796-9bb9-0cb3d26efbc3.png)

`Step #5:` Install express (can use `--save` to create dependencies or `--no-save` to not create dependencies).

![Screen Shot 2022-05-17 at 7 41 03 AM](https://user-images.githubusercontent.com/32807576/168802819-d96b9e53-f4a6-401d-9904-30aa42715989.png)

`Step #6:` Run the application `node <application_name>.js` (server is running & listens to port 7000; to stop server use `Control+C`).

![Screen Shot 2022-05-17 at 7 49 22 AM](https://user-images.githubusercontent.com/32807576/168804201-25aedcf4-c8a6-4e02-b21e-ffbfbcbb33c9.png)

`Step #7:` On the web browser run the `localhost: 7000` on the machine.

![Screen Shot 2022-05-17 at 7 50 40 AM](https://user-images.githubusercontent.com/32807576/168804438-01a55e71-3e9c-4095-920f-d6a7ff45d129.png)
