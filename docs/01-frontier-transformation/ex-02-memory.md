# EX-02: ให้ Copilot จำรูปแบบการสรุปที่เราชอบ

เพื่อนร่วมงานที่ทำงานด้วยกันบ่อยจะเรียนรู้ว่าเราชอบเห็นผลงานแบบไหน ในกิจกรรมนี้ เราจะให้ Copilot จำรูปแบบการสรุปสถานะที่สั้นและใช้งานง่าย

> **สิทธิ์ใช้งาน:** Memory ต้องเปิดใช้ในบัญชีผู้เรียน

## Scenario: รูปแบบอัปเดตที่ใช้เป็นประจำ

### Practice 1: บันทึกและทดสอบ Preference

ใน Practice นี้ พวกเราจะบันทึก Preference ที่ไม่เป็นความลับ แล้วตรวจสอบว่า Copilot นำไปใช้ใน Conversation ใหม่หรือไม่

#### Steps

1. เปิด **Microsoft 365 Copilot**
2. Copy Prompt นี้ไปวาง และกด enter

```text
เมื่อขอสรุปสถานะงาน ให้ตอบเป็นภาษาไทยแบบสั้น โดยแสดงเพียง 3 หัวข้อ:

1. ความคืบหน้า
2. สิ่งที่ต้องระวัง
3. สิ่งที่ควรทำต่อ
```

3. เริ่ม Conversation ใหม่
4. เลือกหรือแนบไฟล์ <a href="/ms-agent-a-thon-2026/files/busy-workday-project-update.docx" download="busy-workday-project-update.docx">busy-workday-project-update.docx</a>
5. Copy Prompt ทดสอบไปวาง

```text
สรุปสถานะงานจากไฟล์ที่แนบให้ฉัน
```

6. สังเกตว่า Copilot ใช้รูปแบบสามหัวข้อโดยที่เราไม่ได้บอกซ้ำหรือไม่
7. หลังจบกิจกรรม ให้ไปที่ Setting (ปุ่ม ⚙️ ด้านล่างซ้าย) > เลือก Personalization > หา **Saved Memory** และลบ Memory ที่สร้างในการทดลองใช้งานของเรา

#### Checkpoint

- Conversation ใหม่ใช้รูปแบบสามหัวข้อที่บันทึกไว้
- ลบ Memory ของกิจกรรมแล้ว โดยเฉพาะเมื่อใช้บัญชีที่ผู้จัดเตรียมให้

#### Expected Output

คำตอบใน Conversation ใหม่ที่จัดเป็นสามหัวข้อ ได้แก่ ความคืบหน้า สิ่งที่ต้องระวัง และสิ่งที่ควรทำต่อ

> **Fallback:** หากบัญชีไม่มี Memory ให้ดูการสาธิตจากวิทยากร

[← EX-01: Work IQ](./ex-01-work-iq) | [EX-03: Excel managed Skill →](./ex-03-excel-managed-skill)
