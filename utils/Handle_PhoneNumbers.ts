class HandlePhoneNumbers{

    addCountryCode(phone: string): string | null {
      const cleaned = phone.replace(/\D/g, ''); // إزالة الرموز غير الرقمية

      // لو الرقم يحتوي على كود دولي بالفعل
      if (cleaned.startsWith('20') && cleaned.length === 12) return '+20' + cleaned.slice(2);
      if (cleaned.startsWith('966') && cleaned.length === 12) return '+966' + cleaned.slice(3);
      if (cleaned.startsWith('971') && cleaned.length === 12) return '+971' + cleaned.slice(3);

      // أرقام مصر المحلية
      if (/^01[0-2,5][0-9]{8}$/.test(cleaned)) {
        return '+20' + cleaned.slice(1);
      }

      // السعودية
      if (/^05[0-9]{8}$/.test(cleaned)) {
        return '+966' + cleaned.slice(1);
      }

      // الإمارات
      if (/^05[0-9]{8}$/.test(cleaned)) {
        return '+971' + cleaned.slice(1);
      }

      return null; // غير معروف
    }


    isPhoneWithCountryCode = (phone: string): boolean => {
      const regex = /^\+?(20|966|971)[0-9]{8,}$/; // عدّل الأرقام حسب الدول المطلوبة
      return regex.test(phone);
    }
    
    removePlusSign(phone: string): string {
      return phone.startsWith('+') ? phone.slice(1) : phone;
    }
}

export default new HandlePhoneNumbers()

