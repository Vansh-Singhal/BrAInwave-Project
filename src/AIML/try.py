import pandas as pd
import nltk
from nltk.corpus import stopwords
import voice

# Load the CSV file
file_path = 'Scribe.csv'  # Update with your file path if necessary
df = pd.read_csv(file_path)

# Extract relevant columns and assign them meaningful names
df = df.iloc[:, [1, 6, 8, 9, 10]]  # Update this if 'subjects' is at a different index
df.columns = ['name', 'profile_rating', 'lang_name', 'lang_pro', 'subjects']

# Define the ordered categories for language proficiency
lang_proficiency_order = ['Basic', 'Intermediate', 'Fluent', 'Advance']
df['lang_pro'] = pd.Categorical(df['lang_pro'], categories=lang_proficiency_order, ordered=True)

# Sort by profile_rating descending, then by lang_pro descending
sorted_df = df.sort_values(by=['profile_rating', 'lang_pro'], ascending=[False, False])

# Tokenize sentence and find matches in subjects
def find_entries_by_subject(sentence):
    # Tokenize the sentence
    stop_words = set(stopwords.words('english'))
    tokens = sentence.lower().split()
    tokens = [word for word in tokens if word.lower() not in stop_words]

    # Loop through each token and find matching entries in 'subjects'
    for token in tokens:
        matches = sorted_df[sorted_df['subjects'].str.contains(token, case=False, na=False)]
        if not matches.empty:
            print(f"\nEntries matching subject '{token}':")
            for _, row in matches.iterrows():
                print(f"Name: {row['name']}, Rating: {row['profile_rating']}, Proficiency: {row['lang_pro']}")

# Example usage

print(voice.captured_text)
find_entries_by_subject(voice.captured_text)