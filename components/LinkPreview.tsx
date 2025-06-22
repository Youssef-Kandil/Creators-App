import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, useColorScheme } from 'react-native';
import { darkThem, lightThem } from '@/Config/app_identity';
import { verticalScale_hights, moderateScale_Font } from '@/utils/responsive';
import { Link } from 'expo-router';

const API_KEY = 'b74015422a6e28600b127bc99f971b76';

async function fetchLinkPreviewData(url: string, signal: AbortSignal) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000); // وقت أقصى ٥ ثواني

  try {
    const response = await fetch(
      `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`,
      { signal: controller.signal }
    );
    const data = await response.json();
    clearTimeout(timeout);
    return {
      ...data,
      images: data.image ? [data.image] : [],
    };
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

const LinkPreview = React.memo(({ url }: { url: string }) => {
  const theme = useColorScheme();
  const isDark = theme === 'dark';
  const themeColors = isDark ? darkThem : lightThem;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorLoadingImage, setErrorLoadingImage] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchLinkPreviewData(url, controller.signal);
        if (isMounted) {
          setData(result);
        }
      } catch (error) {
        console.warn('Link preview API failed:', error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  if (loading) {
    return (
      <View style={{
        width: verticalScale_hights(90),
        height: verticalScale_hights(90),
        borderRadius: verticalScale_hights(10),
        overflow: 'hidden',
        backgroundColor: 'rgba(70, 70, 70, 0.29)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!data) {
    return <Text>{url}</Text>;
  }

  const imageUrl = data.images?.[0] ?? null;

  return (
    <View style={{
      width: verticalScale_hights(90),
      height: verticalScale_hights(90),
      borderRadius: verticalScale_hights(10),
      overflow: 'hidden',
      backgroundColor: 'rgba(70, 70, 70, 0.29)',
    }}>
      <Link href={url as any} style={{
        width: '100%',
        height: '100%',
        borderRadius: verticalScale_hights(10),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {imageUrl && !errorLoadingImage ? (
          <Image
            source={{ uri: imageUrl }}
            style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
            onError={() => setErrorLoadingImage(true)}
          />
        ) : (
          <Text style={{
            color: themeColors.textColor,
            fontSize: moderateScale_Font(10),
            textAlign: 'center',
            paddingHorizontal: 4,
          }} numberOfLines={3}>
            لا يوجد صورة مرفقة لهذا المشروع
          </Text>
        )}
      </Link>
    </View>
  );
});

export default LinkPreview;
