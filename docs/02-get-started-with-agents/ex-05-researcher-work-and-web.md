# EX-05: ทดลอง Researcher กับข้อมูลงานและเว็บ

Researcher ช่วยรวบรวมข้อมูลจากเว็บและข้อมูลการทำงานที่พวกเรามีสิทธิ์เข้าถึง แล้วเรียบเรียงเป็นคำตอบที่ตรวจสอบ Source ได้ ใน Exercise นี้ พวกเราจะทดลองสอง Prompt สำหรับวิเคราะห์คู่แข่งและเตรียมแผนประจำสัปดาห์


> **สิทธิ์ใช้งาน:** Researcher ต้องปรากฏใต้ **Agents** และต้องได้รับอนุญาตให้เข้าถึง Work content และ Web content ตามนโยบายขององค์กร `ต้องตรวจสอบก่อนเริ่มอบรม` ผลลัพธ์จะแตกต่างกันตามข้อมูลและสิทธิ์ที่แต่ละคนเข้าถึงได้

## Scenario 1: ติดตามความเคลื่อนไหวของคู่แข่ง

### Practice 1: รวมข่าวล่าสุดกับข้อมูลภายใน

ใน Practice นี้ พวกเราจะให้ Researcher ค้นหาประกาศล่าสุดของบริษัทที่สนใจ แล้วเปรียบเทียบกับ Email, Document หรือข้อมูลการวิเคราะห์ภายในที่บัญชีของเรามีสิทธิ์เข้าถึง

#### Steps

1. เปิด **Microsoft 365 Copilot**
2. หากไม่เห็น Researcher ให้เปิด **More Agents** จากเมนูด้านซ้าย
3. เลือก **Researcher** ใต้ **Agents** และเริ่ม Conversation ใหม่
4. แทนที่ `[COMPANY NAME]` ด้วยชื่อบริษัทหรือคู่แข่งที่ต้องการติดตาม แล้ว Copy Prompt ด้านล่างไปวาง

```text
Brief me on [COMPANY NAME]'s recent announcements and our internal insights about the company.
```

1. หาก Researcher ถามคำถามเพิ่มเติม ให้ระบุชื่อบริษัท ช่วงเวลา หรือหัวข้อที่ต้องการ
2. เปิด Citation อย่างน้อยหนึ่งรายการจาก Web source และหนึ่งรายการจาก Work source หากมี
3. ตรวจว่าคำตอบแยก Public information, Internal information และ Assumption ออกจากกัน

#### Checkpoint

- ประกาศล่าสุดมี Citation จาก Source ที่ตรวจสอบได้
- ข้อมูลภายในมาจาก Content ที่ผู้เรียนมีสิทธิ์เข้าถึง หรือ Researcher แจ้งว่าไม่พบข้อมูล
- คำตอบไม่เปลี่ยน Assumption หรือช่องว่างของข้อมูลให้เป็นข้อเท็จจริง

#### Expected Output

Brief ที่แยกข่าวหรือประกาศสาธารณะออกจากข้อมูลภายใน พร้อม Citation, Information gap และคำถามที่ควรตรวจสอบต่อ

> **Fallback:** หากไม่มี Work content ที่เกี่ยวข้อง ให้ใช้เฉพาะ Public sources แล้วตรวจว่า Researcher ระบุชัดเจนว่าไม่พบข้อมูลภายใน แทนการสร้างข้อมูลขึ้นมา

## Scenario 2: เตรียมแผนสำหรับสัปดาห์นี้



### Practice 2: สรุป Meeting, Deadline และเอกสารที่ต้องอ่าน

ใน Practice นี้ พวกเราจะให้ Researcher ตรวจข้อมูลการทำงานที่เข้าถึงได้ เพื่อสร้าง Weekly game plan ที่ช่วยเตรียมตัวก่อนเริ่มงาน

#### Steps

1. เริ่ม Conversation ใหม่ใน **Researcher**
2. Copy Prompt ด้านล่างไปวาง

```text
Help me prepare for my next 7 days. Group the plan by day.
```

> **บัญชีแบบใช้ร่วมกัน:** Practice นี้จะไม่ทำงานตามที่คาดหวังหากใช้บัญชี Microsoft 365 Copilot ร่วมกัน เนื่องจาก Researcher ไม่สามารถอ้างอิง Calendar และ Work content ส่วนบุคคลได้ ให้ Copy ข้อมูลตัวอย่างด้านล่างไปวางต่อท้าย Prompt เพื่อจำลอง Context แทน

```text
Sample work context:
- Monday, 10:00 AM: Project kickoff meeting. Prepare the project brief and open questions.
- Tuesday, 2:00 PM: Customer review meeting. Read the latest customer feedback summary.
- Wednesday, 5:00 PM: Deadline to submit the budget proposal for manager approval.
- Thursday, 9:30 AM: Team sync. Share project progress, risks, and next steps.
- Friday, 3:00 PM: Deadline to complete the security training.
```

3. ตรวจช่วงวันที่ในคำตอบว่าเริ่มจากวันที่ปัจจุบันและครอบคลุม 7 วัน
4. เปิด Source ของ Meeting หรือ Deadline อย่างน้อยสองรายการ เพื่อตรวจชื่อ วันที่ และสิ่งที่ต้องเตรียม
5. เลือกหนึ่ง Priority แล้วอธิบายกับเพื่อนข้าง ๆ ว่าข้อมูลใดทำให้รายการนั้นสำคัญ

#### Checkpoint

- Weekly game plan แยกข้อมูลตามวันและมี Meeting, Deadline หรือ Commitment ที่ตรวจสอบ Source ได้
- Material ที่แนะนำสัมพันธ์กับ Meeting หรือ Deadline นั้น
- วันที่หรือข้อมูลที่ไม่แน่นอนถูกระบุเป็นสิ่งที่ต้องยืนยัน

#### Expected Output

Weekly game plan สำหรับ 7 วัน พร้อม Meeting, Deadline, เอกสารที่ควรอ่าน, Priority สามรายการ และ Source ที่ใช้ตรวจสอบข้อมูล

> **Fallback:** หากบัญชีไม่มีข้อมูล Calendar หรือ Work content ให้ใช้ผลลัพธ์ตัวอย่างจากวิทยากร แล้วฝึกตรวจว่าแต่ละ Meeting, Deadline และ Priority มี Source รองรับหรือไม่

[← Section ก่อนหน้า: Frontier Transformation](/01-frontier-transformation/) | [EX-06: Analyst →](./ex-06-analyst)
