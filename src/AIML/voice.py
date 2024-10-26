import speech_recognition as sr

def capture_speech():
    
    recognizer = sr.Recognizer()
    
    # Set a custom pause threshold to increase the pause time
    recognizer.pause_threshold = 1.5

    # Capture audio from microphone
    with sr.Microphone() as source:
        print("Adjusting for ambient noise... Please wait.")
        recognizer.adjust_for_ambient_noise(source, duration=1)  
        print("Say something:")
        
        audio = recognizer.listen(source)

   
    try:
        speech = recognizer.recognize_google(audio)
        print("You said: " + speech)
        return speech
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results from Google Speech Recognition service; {e}")
        return ""

# To test, call the function if running this file
captured_text = capture_speech()