# Web Application

Improves communication between the instructor and students during a class session.

-----

<b>Apache (Web Server)</b>

-----

# Implementation

<b>Scripting Language:</b> PHP embedded in html.

<b>Web Server:</b> Apache (localhost)

<b>Database Server:</b> MySQL (PHPMyAdmin)


`Step #1: (Download)` <b>XAMPP (Cross-Platform, Apache, MariaDB, PHP)</b> open-source web server package.

[![Screen Shot 2022-03-12 at 7 54 27 PM](https://user-images.githubusercontent.com/32807576/158040258-69a4ae87-2a80-4c45-b6dc-c01b35c4671b.png)](https://www.apachefriends.org/index.html)

`Step #2: (Setup)` Control panel select "start" in the "General tab" & in the "Services tab" select "start all".

<b>Apache (web server)</b> is the machine where the application is running (localhost: local computer). 

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
