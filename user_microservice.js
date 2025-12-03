from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

@app.post("/user_login")
async def get_user():
    